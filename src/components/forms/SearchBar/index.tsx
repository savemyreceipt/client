import { Input } from "../Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SearchBar = (props: React.ComponentProps<"input">) => {
    return (
        <div className="flex flex-1 relative w-full max-w-md">
            <div className="h-[40px] w-10 absolute flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} className="p-3" />
            </div>
            <Input className="pl-8 w-full focus:outline-none focus:border-[#00a869] focus:border-2" {...props} />
        </div>
    );
};
