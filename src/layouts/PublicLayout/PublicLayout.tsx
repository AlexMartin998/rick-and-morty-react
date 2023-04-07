export interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      <nav>{/* <Navbar /> */}</nav>

      <main
        style={{ margin: '80px auto', maxWidth: '1440px', padding: '0 30px' }}
      >
        {children}
      </main>

      <footer></footer>
    </>
  );
};

export default PublicLayout;
