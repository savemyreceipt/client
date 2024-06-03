import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "../Input";

export const SearchBar = (props: React.ComponentProps<"input">) => {
    return (
        <form className="flex flex-1 relative w-full max-w-md">
            <div className="h-[40px] w-10 absolute flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <Input className="pl-8 w-full focus:outline-none focus:border-[#00a869] focus:border-2" {...props} />
        </form>
    );
};
