
import { db } from './db';
import { and, eq, gte, lte, sql } from 'drizzle-orm';
import { 
  users, 
  comments, 
  calendarEvents, 
  type User, 
  type Comment, 
  type CalendarEvent,
  type InsertUser,
  type InsertComment,
  type InsertCalendarEvent
} from '../shared/schema';

class DatabaseStorage {
  async checkDatabaseConnection() {
    try {
      await db.execute(sql`SELECT 1`);
      return true;
    } catch (error) {
      console.error('Database connection error:', error);
      return false;
    }
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(userData: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .returning();
    return user;
  }

  async updateUserLastLogin(id: number): Promise<User | undefined> {
    const [updatedUser] = await db
      .update(users)
      .set({ lastLogin: new Date() })
      .where(eq(users.id, id))
      .returning();
    return updatedUser;
  }

  async verifyUserPassword(username: string, password: string): Promise<User | undefined> {
    const user = await this.getUserByUsername(username);
    if (!user) return undefined;
    if (user.password !== password) return undefined;
    return this.updateUserLastLogin(user.id);
  }

  // Comment operations
  async createComment(commentData: InsertComment): Promise<Comment> {
    const [comment] = await db
      .insert(comments)
      .values({ ...commentData, isRead: false })
      .returning();
    return comment;
  }

  async getAllComments(): Promise<Comment[]> {
    return db.select().from(comments).orderBy(comments.createdAt);
  }

  async markCommentAsRead(id: number): Promise<Comment | undefined> {
    const [comment] = await db
      .update(comments)
      .set({ isRead: true })
      .where(eq(comments.id, id))
      .returning();
    return comment;
  }

  async deleteComment(id: number): Promise<boolean> {
    try {
      await db
        .delete(comments)
        .where(eq(comments.id, id));
      return true;
    } catch (error) {
      console.error('Error deleting comment:', error);
      return false;
    }
  }

  // Calendar event operations
  async createCalendarEvent(eventData: InsertCalendarEvent): Promise<CalendarEvent> {
    const [event] = await db
      .insert(calendarEvents)
      .values(eventData)
      .returning();
    return event;
  }

  async getAllCalendarEvents(): Promise<CalendarEvent[]> {
    return db.select().from(calendarEvents).orderBy(calendarEvents.eventDate);
  }

  async getCalendarEventsByDateRange(startDate: Date, endDate: Date): Promise<CalendarEvent[]> {
    return db
      .select()
      .from(calendarEvents)
      .where(
        sql`${calendarEvents.eventDate} >= ${startDate} AND ${calendarEvents.eventDate} <= ${endDate}`
      )
      .orderBy(calendarEvents.eventDate);
  }

  async getCalendarEvent(id: number): Promise<CalendarEvent | undefined> {
    const [event] = await db
      .select()
      .from(calendarEvents)
      .where(eq(calendarEvents.id, id));
    return event;
  }

  async updateCalendarEvent(id: number, data: Partial<InsertCalendarEvent>): Promise<CalendarEvent | null> {
    const [event] = await db
      .update(calendarEvents)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(calendarEvents.id, id))
      .returning();
    return event || null;
  }

  async deleteCalendarEvent(id: number): Promise<boolean> {
    try {
      await db
        .delete(calendarEvents)
        .where(eq(calendarEvents.id, id));
      return true;
    } catch (error) {
      console.error('Error deleting calendar event:', error);
      return false;
    }
  }
}

export const storage = new DatabaseStorage();
