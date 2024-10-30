import * as React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20.967} // Half of 27.955
    height={20.3175} // Half of 27.089
    fill="none"
    viewBox="1.907 1.448 27.955 27.089"
    {...props}
  >
    <path
      fill="#E9327C"
      d="M20.99 23.759 3.05 11.384c-1.818-1.254-1.2-3.865 1.067-4.479L23.184 1.73A2.7 2.7 0 0 1 26.8 4.222l-1.13 17.549c-.134 2.083-2.862 3.242-4.68 1.988Z"
      className="ccompli2"
    />
    <path
      fill="#1DACE3"
      d="M15.3 26.814 4.731 6.145a2.883 2.883 0 0 1 3.007-4.16l19.587 3.022a2.884 2.884 0 0 1 2.127 4.162l-9.023 17.646a2.883 2.883 0 0 1-5.129-.001Z"
      className="ccompli1"
    />
    <path
      fill="#001A49"
      d="m26.752 4.918-9.764-1.507L5 6.666l4.785 9.361 11.205 7.732c.247.169.52.298.806.383l4.256-8.323.7-10.901Z"
      className="ccustom"
    />
  </svg>
);

export default Logo;
