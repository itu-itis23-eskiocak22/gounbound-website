"use client";

export default function ConfirmedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-forest">
      <div
        className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-12 max-w-md w-full text-center"
        style={{ animation: "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Success Icon */}
        <div
          className="w-20 h-20 rounded-full bg-sage/15 border border-sage/20 flex items-center justify-center mx-auto mb-7"
          style={{
            animation: "scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          }}
        >
          <svg
            className="w-10 h-10 text-sage-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mb-3">
          Email Verified
        </h1>
        <p className="text-white/50 text-[15px] leading-relaxed mb-8">
          Your account has been successfully activated.
          <br />
          You can now return to the app and sign in.
        </p>

        <div className="inline-block px-4 py-2 bg-white/8 rounded-full text-white/70 text-sm font-medium">
          UNBOUND
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleUp {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
