function Rating({ rating, voteCount }: { rating: number; voteCount: number }) {
  const stars = Array.from({ length: 10 }, (_, index) => (
    <svg
      key={index}
      className={`w-4 h-4 ${
        index < rating ? "text-yellow-300" : "text-gray-300"
      } me-1`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ));

  const voteCountString: string =
    voteCount / 1000 > 1
      ? Math.floor(voteCount / 1000).toString() + "K"
      : voteCount.toString();

  return (
    <div className="items-center pt-5">
      <div className="flex items-center pt-5">{stars}</div>
      <p className="pt-5 ms-1 text-sm font-medium text-black dark:text-slate-300 w-full">
        {rating} out of 10 ({voteCountString} votes)
      </p>
    </div>
  );
}

export default Rating;
