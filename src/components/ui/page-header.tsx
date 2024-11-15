interface PageHeader {
  header: string;
}

export default function PageHeader({ header }: PageHeader) {
  return (
    <h1 className="text-2xl font-medium capitalize tracking-tight md:text-5xl">
      {header}
    </h1>
  );
}
