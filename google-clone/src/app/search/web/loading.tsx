export default function Loading() {
  return (
    <div className="w-full mx-auto sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%]">
      <div className="mb-8 max-w-xl animate-pulse">
        <div className="group flex flex-col mb-8">
          <div className="h-2 w-[40%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-4 w-[60%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-5 w-[80%] bg-gray-200 rounded-full mt-2"></div>
        </div>
      </div>
      <div className="mb-8 max-w-xl animate-pulse">
        <div className="group flex flex-col">
          <div className="h-2 w-[40%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-4 w-[60%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-5 w-[80%] bg-gray-200 rounded-full mt-2"></div>
        </div>
      </div>
      <div className="mb-8 max-w-xl animate-pulse">
        <div className="group flex flex-col">
          <div className="h-2 w-[40%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-4 w-[60%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-5 w-[80%] bg-gray-200 rounded-full mt-2"></div>
        </div>
      </div>
      <div className="mb-8 max-w-xl animate-pulse">
        <div className="group flex flex-col">
          <div className="h-2 w-[40%] bg-gray-200 rounded-full"></div>
          <div className="h-4 w-[60%] bg-gray-200 rounded-full mt-2"></div>
          <div className="h-5 w-[80%] bg-gray-200 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
}
