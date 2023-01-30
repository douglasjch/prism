import { PrismicLink, PrismicRichText, PrismicText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Bounded } from "./Bounded";
import { Heading } from "./Heading";
import { HorizontalDivider } from "./HorizontalDivider";

const SignUpForm = ({ settings }) => {
  return (
    <div className="px-4">
      <form
        action="/api/sign-up"
        method="post"
        className="grid w-full max-w-xl grid-cols-1 gap-6"
      >
        {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
          <div className="font-serif tracking-tight text-center text-slate-500">
            <PrismicRichText
              field={settings.data.newsletterDescription}
              components={{
                heading1: ({ children }) => (
                  <Heading as="h2" className="mb-4 last:mb-0">
                    {children}
                  </Heading>
                ),
                paragraph: ({ children }) => (
                  <p className="mb-4 italic last:mb-0">{children}</p>
                ),
              }}
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-2">
          <div className="relative">
            <label>
              <span className="sr-only">Email address</span>
              <input
                name="email"
                type="email"
                placeholder="jane.doe@example.com"
                required={true}
                className="w-full py-3 pl-3 pr-10 border-b rounded-none border-slate-200 text-slate-800 placeholder-slate-400"
              />
            </label>
            <button
              type="submit"
              className="absolute top-0 bottom-0 right-0 flex items-center justify-center px-3 text-2xl text-slate-400"
            >
              <span className="sr-only">Submit</span>
              <span aria-hidden={true}>&rarr;</span>
            </button>
          </div>
          {prismicH.isFilled.richText(settings.data.newsletterDisclaimer) && (
            <p className="text-xs tracking-tight text-center text-slate-500">
              <PrismicText field={settings.data.newsletterDisclaimer} />
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export const Footer = ({ withSignUpForm = true, settings }) => {
  return (
    <Bounded as="footer">
      <div className="grid grid-cols-1 gap-24 justify-items-center">
        <HorizontalDivider />
        {withSignUpForm && <SignUpForm settings={settings} />}
        <div className="w-full max-w-3xl mx-auto text-xs font-semibold tracking-tight text-center text-slate-500">
          Shop Our Store {" "}
          <PrismicLink href="https://herbsandoils.swell.store/" className="text-slate-700">
            Herbs and Oils
          </PrismicLink>
        </div>
      </div>
    </Bounded>
  );
};
