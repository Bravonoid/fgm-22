import { Helmet } from "react-helmet";

export function HtmlHead({ title, description }) {
  return (
    <Helmet>
      <title>{`${title} · Festival Gadjah Mada`}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}