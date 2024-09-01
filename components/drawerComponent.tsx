import DrawerIcon from './React-icon/drawerIcon';
import { Button } from './ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
import { NavBarLinks } from './navbar';


  export function DrawerComponent() {
   
    return (
      <Drawer >
        <DrawerTrigger asChild>
               <div className='h-10 w-10 cursor-pointer'>
                  <DrawerIcon />  
                </div> 
        </DrawerTrigger>
        <DrawerContent > 
          <div className="mx-auto w-full max-w-sm h-1/2 ">
            <DrawerHeader>
              <DrawerTitle className='text- xl font-sans  font-bold' >MENU</DrawerTitle>
            </DrawerHeader>
            <div className='  flex flex-col justify-center items-center'>
                <div className='w-fit text-center'>
                    <ul>
                        <NavBarLinks text={"Home"} NavigateLink={"/"} classname={'my-2 text-lg font-semibold'}/>
                        <NavBarLinks text={"Add Listing"} NavigateLink={"/"} classname={'my-2 text-lg font-semibold'}/>
                        <NavBarLinks text={"About"} NavigateLink={"/"} classname={'my-2 text-lg font-semibold'}/>
                        <NavBarLinks text={"Contact"} NavigateLink={"/"} classname={'my-2 text-lg font-semibold'}/>
                    </ul>
                </div>
                <div className=' my-2'>
                    <Button className='bg-sky-100 mx-1' variant={'ghost'}>Sign-in</Button>
                    <Button className='bg-sky-100 mx-1' variant={'ghost'}>Register</Button>
                </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant={'destructive'}>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }