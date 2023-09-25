import { ContactProps } from "../../types/Types";

export default function ContactContacts({
  directions,
  address,
  title,
  adddressTrue,
  paragraph,
  h1Title,
  p1Paragraph,
  h2Title,
  p2Paragraph,
}: ContactProps) {
  return (
    <div className="w-full md:w-[48%] lg:w-[22%] min-h-[250px]  h-full p-8 rounded-3xl space-y-4 mb-8 bg-[#f6f9fc] flex flex-col">
      <h1 className="font-semibold text-2xl">{title}</h1>
      {adddressTrue && <p className="text-lg">{address}</p>}
      {paragraph && (
        <>
          <div>
            <h1>{h1Title}</h1>
            <p>{p1Paragraph}</p>
          </div>
          <div>
            <h1>{h2Title}</h1>
            <p>{p2Paragraph}</p>
          </div>
        </>
      )}
      {directions && <button className="border py-2">Get Directions</button>}
    </div>
  );
}
