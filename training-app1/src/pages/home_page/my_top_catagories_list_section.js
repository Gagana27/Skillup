import CategoryList from "../common/category";

export default function TrendingTopicsSection(props) {
  return (
    <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 mt-10 lg:pt-14 lg:pb-28 lg:px-8">
      <div className="absolute inset-0 bg-gray-800">
        <div className="bg-gray-800 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
            Trending Topics
          </h2>
        </div>
        <CategoryList />
      </div>
    </div>
  );
}




