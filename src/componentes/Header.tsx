import Logo from "./Logo"


export function Header () {
    return (
        <header className="w-full py-3 flex items-center justify-center bg-zinc-100 boder-b boder-gray-600 " >
            <Logo />
        </header> 
    )        
}