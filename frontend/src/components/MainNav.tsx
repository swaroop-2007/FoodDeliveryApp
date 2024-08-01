import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <div className="flex justify-between items-center w-full px-4"> {/* Updated this line */}
            <span className="flex space-x-2 items-center">
                {/* Other elements can be added here, like site logo or nav links */}
            </span>
            {isAuthenticated ? (
                <UsernameMenu />
            ) : (
                <Button
                    variant="ghost"
                    className="font-bold hover:text-orange-500 hover:bg-white"
                    onClick={async () => await loginWithRedirect()}
                >
                    LogIn
                </Button>
            )}
        </div>
    );
};

export default MainNav;
