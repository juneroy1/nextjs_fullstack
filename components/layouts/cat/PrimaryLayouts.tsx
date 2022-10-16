import Head from 'next/head';

export interface IPrimaryLayouts extends React.ComponentPropsWithoutRef<'div'> {
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayouts: React.FC<IPrimaryLayouts> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs dadadada App Template</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <p>adadadadadada</p>
        <main className="px-5">{children}</main>
        <div className="m-auto" />
      </div>
    </>
  );
};

export default PrimaryLayouts;
