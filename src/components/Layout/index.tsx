import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-6xl mx-auto ">{children}</div>;
}
