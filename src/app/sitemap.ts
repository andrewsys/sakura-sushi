export default function sitemap() {
    return [
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/`, lastModified: new Date() },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/menu`, lastModified: new Date() },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`, lastModified: new Date() },
        { url: `${process.env.NEXT_PUBLIC_BASE_URL}/reservations`, lastModified: new Date() }
    ]
}
    