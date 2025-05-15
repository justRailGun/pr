import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,

  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const NavigationMobile = () => {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem >
      <NavigationMenuTrigger><p className='text-xs'>Navigation</p></NavigationMenuTrigger>
      <NavigationMenuContent className='bg-[#141827] rounded-lg'>
            <NavigationMenuLink href='#service' className=' hover-blue '>Services</NavigationMenuLink>
            <NavigationMenuLink href='#skills' className=' hover-blue '>Technologies</NavigationMenuLink>
            <NavigationMenuLink href='#portfolio' className=' hover-blue '>Portfolio</NavigationMenuLink>
            <NavigationMenuLink href='#contact' className=' hover-blue '>Contact</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

  )
}

export default NavigationMobile