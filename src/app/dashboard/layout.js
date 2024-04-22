

export default function DashboardLayout({ children }) {
  throw new Error("error in dashboard layout")
  return (
    <>
   <div className="mt-8">
    <ul className="flex gap-5 my-5 p-4">
        <li>Analytics</li>
        <li>Settings</li>
    </ul>
    
   </div>
  {children}
   </>
  );
}
