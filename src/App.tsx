import { useState } from "react";

export default function LikeButton() {
    const [isLiked, setIsLike] = useState(false);

    const toggleLike = () => {
        setIsLike(!isLiked);
    };

    return (
        <div>
            <p onClick={toggleLike}>
                <i className="fa-regular fa-heart"></i>
            </p>
        </div>
    );
}