/* eslint-disable react/prop-types */
// export default function TabButton({ children }) {
//   return (
//     <li>
//       <button>{children}</button>
//     </li>
//   );
// }

// như thế này thì mình khi gọi lại phải sử dụng cái <TabButton batKy="State"></TabButton>;
export default function TabButton({ batKy }) {
  return (
    <li>
      <button>{batKy}</button>
    </li>
  );
}
