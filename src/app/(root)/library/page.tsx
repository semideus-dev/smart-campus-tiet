import LibraryHeading from "./_components/heading";
import LibraryInfoGrid from "./_components/info-grid";
import RequestBookForm from "./_components/request-form";

export default function LibraryModule() {
  return (
    <div className="space-y-8">
      <LibraryHeading />
      <LibraryInfoGrid />
      <RequestBookForm />
    </div>
  );
}
