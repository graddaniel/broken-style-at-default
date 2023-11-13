export default function SomeRouteLayout({
    children,
    slot,
}: {
    children: React.ReactNode,
    slot: React.ReactNode,
}) {
    return (
        <>
            {children}
            {slot}
        </>
    );
}