// 'use client';

// import { usePathname } from 'next/navigation';
// import HeaderFooterWrapper from "@/components/Layouts/HeaderFooterWrapper";
// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const hideChrome = pathname === '/';

//   if (hideChrome) return <>{children}</>;

//   return (
//     <>
//       <HeaderFooterWrapper>{children}</HeaderFooterWrapper>
//     </>
//   );
// }
