import dynamic from "next/dynamic";
import { MapSectionData } from "../components/sections/MapSection";
import { getDataBySlug } from "../lib/api";

interface IParagraph {
  paragraph: IParagraph;
}

interface IContactUsData {
  page_title: string;
  headline: string;
  title_1: string;
  paragraphs_group: IParagraph[];
  form_title: string;
}

type Props = {
  contactUsData: IContactUsData;
};

const ContactUs = ({ contactUsData }: Props) => {
  return (
    <section className="flex mx-32 my-24">
      <div className="flex flex-col w-2/5 mr-4">
        <h1 className="text-8xl leading-none mb-8">{contactUsData.page_title}</h1>
        <h2 className="text-5xl mb-12">{contactUsData.headline}</h2>
        <h3 className="text-2xl uppercase mb-4">{contactUsData.title_1}</h3>
        {contactUsData.paragraphs_group.map((e, i) => (
          <p className="mb-2" key={i}>
            {e.paragraph}
          </p>
        ))}
      </div>
      <div className="border w-3/5 px-12 py-12 ml-8">
        <form className="flex flex-col" action="/api/form" method="post">
          <h2 className="text-5xl mb-2">{contactUsData.form_title}</h2>
          <label htmlFor="topic"></label>
          <input
            className="border px-4 text-lg py-4 my-4"
            type="text"
            id="first"
            name="first"
            required
            placeholder="Topic"
          />
          <div className="flex w-full my-4">
            <label htmlFor="first name"></label>
            <input
              className="border w-1/2 px-4 text-lg py-4"
              type="text"
              id="first name"
              name="first name"
              required
              placeholder="First name"
            />

            <label htmlFor="last name"></label>
            <input
              className="border w-1/2 px-4 text-lg py-4 border-l-0"
              type="text"
              id="last name"
              name="last name"
              required
              placeholder="Last name"
            />
          </div>
          <label htmlFor="email"></label>
          <input
            className="border px-4 text-lg py-4 my-4"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email address"
          />
          <label htmlFor="message"></label>
          <textarea
            className="border px-4 text-lg py-4 mb-8 mt-4"
            rows={8}
            id="message"
            name="message"
            required
            placeholder="Message"
          />

          <button
            className="bg-red rounded-lg px-8 py-2 text-white text-lg ml-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

export const getStaticProps = async () => {
  const contactUsData = getDataBySlug("contactus/contact_us_data");

  return {
    props: { contactUsData },
  };
};
