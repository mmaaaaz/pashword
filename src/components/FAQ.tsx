import { Faqs } from "@constants/faqs";
import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  return (
    <div className="w-full px-4 pb-20" id="faq">
      <h4 className="mb-2 text-center text-2xl font-medium text-slate-100">
        FAQ
      </h4>

      <div className="mx-auto mt-5 w-full max-w-4xl rounded-2xl p-8 ring-2 ring-slate-700">
        {Faqs.map(({ question, Answer }, index: number) => (
          <Disclosure as="div" key={question} className="mb-2">
            <Disclosure.Button className="faq-button">
              <span>
                {index + 1}. {question}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="faq-text">{Answer}</Disclosure.Panel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
