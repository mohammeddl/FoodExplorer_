import { Camera } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100'>
      <nav className='bg-white shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center gap-2'>
              <Camera className='w-8 h-8 text-indigo-600' />
              <span className='text-xl font-bold text-gray-900'>
                FoodExplorer
              </span>
            </div>
          </div>
        </div>
      </nav>

      <main className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
        {children}
      </main>

      <footer className='bg-white border-t border-gray-200 mt-12'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <p className='text-center text-gray-500'>
            © 2025 FoodExplorer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
