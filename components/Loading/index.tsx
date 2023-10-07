import "./style.css";

export default function Loading() {
   return (
      <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0">
         <div className="loader"></div>
      </div>
   );
}
