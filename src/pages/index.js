// pages/index.js
export default function Home() {
  return (
    <div style={styles.container}>
      <img
        src="/logoStacked.png"
        alt="Practical AI Toolkit Logo"
        style={styles.image}
      />
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff', // optional background
  },
  image: {
    maxWidth: '400px',
    width: '80%',
    height: 'auto',
  },
};