import Link from "next/link"

// export const NotFound = () => {
//     return (
//         <div>
//             <h1>Not Found</h1>
//             <p>Sorry, the page you are looking for does not exist</p>
//             <Link href="/">Return to Home</Link>
//         </div>
//     )
// }


export default function NotFound() {
    return (
        <div>
            <h1>Not Found</h1>
            <p>Sorry, the page you are looking for does not exist</p>
            <Link href="/">Return to Home</Link>
        </div>
    );
}
