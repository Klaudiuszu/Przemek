import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";

export default function Home() {

  const { locales } = useRouter();
  const intl = useIntl();

  const tiitle = intl.formatMessage({id: "page.home.title"})

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
     <header>{tiitle}</header>
    </main>
  );
}
