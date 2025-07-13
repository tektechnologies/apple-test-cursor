
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, Search } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  logoUrl?: string;
}

interface CompanySwitcherProps {
  companies: Company[];
  selectedCompanyId: string | 'all';
  onSelectCompany: (companyId: string | 'all') => void;
}

const CompanySwitcher: React.FC<CompanySwitcherProps> = ({
  companies,
  selectedCompanyId,
  onSelectCompany
}) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCompany = selectedCompanyId === 'all' 
    ? { id: 'all', name: 'All Companies' } 
    : companies.find(company => company.id === selectedCompanyId);

  const filteredCompanies = searchQuery 
    ? companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : companies;

  const handleSelectCompany = (companyId: string | 'all') => {
    onSelectCompany(companyId);
    setOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      <div className="mb-4">
        <Button 
          variant="outline" 
          onClick={() => setOpen(true)}
          className="border rounded-full px-4 py-1 h-auto flex items-center gap-1 bg-white text-gray-800"
        >
          <span>Company: {selectedCompany?.name || 'All'}</span>
          <ChevronDown size={16} />
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="bottom" className="max-h-[75vh]">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex justify-between items-center">
              <span>Select Company</span>
              <Button 
                variant="outline" 
                onClick={() => setOpen(false)}
                className="border rounded-full px-4 py-1 h-auto flex items-center gap-1"
              >
                <span>Company: {selectedCompany?.name || 'All'}</span>
                <ChevronDown size={16} />
              </Button>
            </SheetTitle>
          </SheetHeader>
          
          <div className="mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Search companies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          
          <div className="overflow-y-auto max-h-[calc(75vh-180px)]">
            {/* "All Companies" is always the first option */}
            <div 
              className={`flex items-center p-3 mb-1 rounded-md cursor-pointer ${selectedCompanyId === 'all' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              onClick={() => handleSelectCompany('all')}
            >
              <Avatar className="mr-3 h-8 w-8">
                <AvatarFallback className="bg-brandPurple text-white">All</AvatarFallback>
              </Avatar>
              <span className="font-medium">All Companies</span>
            </div>
            
            {filteredCompanies.map((company) => (
              <div 
                key={company.id}
                className={`flex items-center p-3 mb-1 rounded-md cursor-pointer ${selectedCompanyId === company.id ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                onClick={() => handleSelectCompany(company.id)}
              >
                <Avatar className="mr-3 h-8 w-8">
                  {company.logoUrl ? (
                    <AvatarImage src={company.logoUrl} alt={company.name} />
                  ) : (
                    <AvatarFallback className="bg-brandPurple text-white">
                      {company.name.substring(0, 2)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span className="font-medium">{company.name}</span>
              </div>
            ))}
            
            {filteredCompanies.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No companies found matching "{searchQuery}"
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CompanySwitcher;
