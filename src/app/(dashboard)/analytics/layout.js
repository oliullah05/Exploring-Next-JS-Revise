

export default function DashboardLayout({ children }) {
  return (
    <>
   <div className="mt-8 analytics">
    <ul className="flex gap-5 my-5 p-4">
        <li>Analytics</li>
        <li>Settings</li>
    </ul>
    
   </div>
  {children}
   </>
  );
}
