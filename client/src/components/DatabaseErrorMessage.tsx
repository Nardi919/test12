import React from 'react';

interface DatabaseErrorProps {
  error?: string;
}

export function DatabaseErrorMessage({ error }: DatabaseErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#121212] p-8 rounded-lg shadow-lg max-w-lg w-full border border-red-500">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>
        
        <h2 className="mb-4 text-2xl font-bold text-center text-white">Database Connection Error</h2>
        
        <div className="mb-8 text-center text-[#c0c0c0] text-sm">
          <p className="mb-4">Unable to connect to the PostgreSQL database. Please check your database configuration.</p>
          
          {error && (
            <div className="p-4 mb-4 bg-black bg-opacity-30 rounded border border-red-400 text-left overflow-auto">
              <code className="text-red-400 whitespace-pre-wrap">{error}</code>
            </div>
          )}
        </div>
        
        <div className="bg-black bg-opacity-50 p-4 rounded-lg text-[#c0c0c0] mb-6 text-sm">
          <h3 className="font-bold text-white mb-2">Setting up for local development:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Create a <code className="bg-black px-1 py-0.5 rounded">.env</code> file in the project root</li>
            <li>Add your PostgreSQL connection string:
              <pre className="bg-black p-2 rounded mt-1 overflow-auto text-xs">
                DATABASE_URL=postgres://username:password@hostname:port/database
              </pre>
            </li>
            <li>Restart the development server</li>
          </ol>
        </div>
        
        <div className="text-center">
          <a 
            href="https://neon.tech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mb-3 mr-2 text-sm font-medium text-white bg-[#26a69a] rounded-lg hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26a69a]"
          >
            Get a Free PostgreSQL Database
          </a>
          <a 
            href="https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/neon-serverless/README.md" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-3 mb-3 text-sm font-medium text-[#26a69a] bg-transparent border border-[#26a69a] rounded-lg hover:bg-[#26a69a] hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26a69a]"
          >
            View Drizzle-Neon Documentation
          </a>
        </div>
      </div>
    </div>
  );
}