
import { useState } from 'react';
import { Input } from "@/components/ui/input";

export function BookSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <Input
        type="search"
        placeholder="Kërko libra sipas titullit, autorit ose lëndës..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 rounded-lg"
      />
      
      <div className="flex gap-2 mt-4">
        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Letërsi</button>
        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Shkencë</button>
        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Histori</button>
        <button className="px-3 py-1 bg-gray-200 rounded-full text-sm">Matematikë</button>
      </div>
    </div>
  );
}
