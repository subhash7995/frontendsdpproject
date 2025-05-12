import NotFoundImage from './notfound.png';

export default function PageNotFound() {
  return (
    <div className="container text-center pt-5">
      <div className="card p-5 animate-fade-in">
        <h1 className="mb-4">Page Not Found</h1>
        <div className="flex justify-center">
          <img 
            src={NotFoundImage} 
            alt="Page Not Found" 
            className="max-width-100" 
            style={{ maxWidth: '300px' }}
          />
        </div>
        <p className="mt-4">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-4">
          <a href="/" className="btn">Return to Home</a>
        </div>
      </div>
    </div>
  );
}
