import { SideCard } from "@/components/LoginSideCard";
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <>
    <div className=" w-full  flex flex-row">

     <SideCard/>
       {children}
    </div>
    </>
  );
}
