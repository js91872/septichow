import { serializeJsonLd } from '@/lib/schema';

export default function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: serializeJsonLd(data as Record<string, unknown>),
      }}
    />
  );
}
