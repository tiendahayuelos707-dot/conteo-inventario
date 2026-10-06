import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title:'Conteo de Inventario', description:'Conteo físico de inventario por referencia, color y talla' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
