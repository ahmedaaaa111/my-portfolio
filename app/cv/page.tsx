import CV from "@/src/components/CV";

export const metadata = {
  title: "Ahmed El Naggar | CV",
  description: "CV of Ahmed El Naggar - Front-End Developer",
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gray-200 print:bg-white print:min-h-0 pt-20 print:pt-0 print:m-0 print:p-0">
      <CV />
    </div>
  );
}