import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaDownload,
  FaFilePdf,
} from "react-icons/fa";
import { jsPDF } from "jspdf";
import profile from "../assets/images/dr-zohaib.jpg"; // ✅ Optimized import

const CANDIDATE_PATHS = [
  encodeURI("/Dr-Zohaib-bzd soft card"),
  encodeURI("/Dr-Zohaib-bzd soft card.jpg"),
  encodeURI("/Dr-Zohaib-bzd soft card.jpeg"),
  encodeURI("/Dr-Zohaib-bzd soft card.png"),
  encodeURI("/Dr-Zohaib-bzd soft card.webp"),
];

const probeImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ ok: true, src, img });
    img.onerror = () => resolve({ ok: false, src, img: null });
    img.src = src;
  });

export default function Contact() {
  const [resolvedSrc, setResolvedSrc] = useState(CANDIDATE_PATHS[0]);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingCard, setIsDownloadingCard] = useState(false);
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    let active = true;

    (async () => {
      for (const candidate of CANDIDATE_PATHS) {
        const result = await probeImage(candidate);
        if (result.ok && active) {
          setResolvedSrc(result.src);
          return;
        }
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/16pd8TTWae/?mibextid=qi2Omg",
      icon: <FaFacebook />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/dr._zohaib_buzdar",
      icon: <FaInstagram />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@dr.zohaibbuzdaroffical",
      icon: <FaTiktok />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dr-zohaib-buzdar-2a5345259",
      icon: <FaLinkedin />,
    },
  ];

  const findWorkingCard = async () => {
    const currentTry = await probeImage(resolvedSrc);
    if (currentTry.ok) return currentTry;

    for (const candidate of CANDIDATE_PATHS) {
      const attempt = await probeImage(candidate);
      if (attempt.ok) {
        setResolvedSrc(attempt.src);
        return attempt;
      }
    }

    throw new Error(
      "public folder mein 'Dr-Zohaib-bzd soft card' image nahi mili. Naam aur extension check karein."
    );
  };

  const handleDownloadCard = async () => {
    setIsDownloadingCard(true);
    setStatusError("");

    try {
      const { src } = await findWorkingCard();
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error("Card file fetch nahi ho saki.");
      }

      const blob = await response.blob();
      const mimeType = blob.type || "image/jpeg";
      const ext = mimeType.includes("png")
        ? "png"
        : mimeType.includes("webp")
        ? "webp"
        : "jpg";

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Dr-Zohaib-Buzdar-Soft-Card.${ext}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (error) {
      setStatusError(
        error instanceof Error ? error.message : "Card download karne mein masla aaya."
      );
    } finally {
      setIsDownloadingCard(false);
    }
  };

  const handleDownloadPdf = async () => {
    setIsDownloadingPdf(true);
    setStatusError("");

    try {
      const { img } = await findWorkingCard();

      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("Canvas context initialize nahi ho saka.");
      }

      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.95);

      const orientation =
        img.naturalWidth >= img.naturalHeight ? "landscape" : "portrait";
      const pdf = new jsPDF({
        orientation,
        unit: "px",
        format: [img.naturalWidth, img.naturalHeight],
      });

      pdf.addImage(dataUrl, "JPEG", 0, 0, img.naturalWidth, img.naturalHeight);
      pdf.save("Dr-Zohaib-Buzdar-Soft-Card.pdf");
    } catch (error) {
      setStatusError(
        error instanceof Error ? error.message : "PDF download karne mein masla aaya."
      );
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24 pb-16 px-5 sm:px-8 selection:bg-teal-400 selection:text-slate-950">
      {/* ✅ Optimized Background Profile Image */}
      <img
        src={profile}
        alt="Dr. Zohaib Buzdar"
        loading="eager"
        decoding="async"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-25 blur-[3px] scale-105 pointer-events-none"
      />

      {/* ✅ Multi-Layer Teal & Emerald Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-teal-950/75 to-slate-950/95 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_55%)] pointer-events-none" />

      {/* ✅ Soft Ambient Glow Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-teal-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -18, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-14 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✅ Glassmorphism Contact Card */}
      <motion.div
        className="relative z-10 bg-slate-900/70 backdrop-blur-2xl border border-white/15 p-7 sm:p-10 rounded-[2rem] shadow-[0_25px_65px_rgba(0,0,0,0.6)] w-full max-w-xl text-center overflow-hidden"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Accent Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-teal-400/85 to-transparent" />

        {/* Eyebrow Pill */}
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-teal-400/15 border border-teal-300/30 text-teal-200 text-xs sm:text-sm font-semibold tracking-wider uppercase"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <span>🐾</span>
          <span>We’re Here for You & Your Pet</span>
        </motion.span>

        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-white mb-3 tracking-tight font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          Get in{" "}
          <span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-200 bg-clip-text text-transparent">
            Touch
          </span>
        </motion.h2>

        <p className="text-slate-300/90 text-sm sm:text-base mb-7 leading-relaxed font-sans">
          Have a question about your pet’s health, checkups, or care routine? Reach out anytime—we’re always happy to help.
        </p>

        {/* ✅ Contact Info Cards */}
        <div className="space-y-3.5 mb-7 text-left">
          <div className="flex items-center gap-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-400/35 rounded-2xl px-4 py-3.5 transition-all duration-300">
            <span className="w-10 h-10 rounded-xl bg-teal-400/15 border border-teal-300/30 text-teal-300 flex items-center justify-center text-lg flex-shrink-0">
              📧
            </span>
            <div className="min-w-0">
              <p className="text-xs text-slate-400 font-medium">Email</p>
              <a
                href="mailto:zohaibuzdar74@gmail.com"
                className="text-sm sm:text-base font-semibold text-teal-200 hover:text-teal-300 hover:underline break-all transition-colors"
              >
                zohaibuzdar74@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-400/35 rounded-2xl px-4 py-3.5 transition-all duration-300">
            <span className="w-10 h-10 rounded-xl bg-teal-400/15 border border-teal-300/30 text-teal-300 flex items-center justify-center text-lg flex-shrink-0">
              📍
            </span>
            <div>
              <p className="text-xs text-slate-400 font-medium">Location</p>
              <p className="text-sm sm:text-base font-semibold text-white">
                Pakistan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-teal-400/35 rounded-2xl px-4 py-3.5 transition-all duration-300">
            <span className="w-10 h-10 rounded-xl bg-teal-400/15 border border-teal-300/30 text-teal-300 flex items-center justify-center text-lg flex-shrink-0">
              📞
            </span>
            <div>
              <p className="text-xs text-slate-400 font-medium">Contact Numbers</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base font-semibold text-white">
                <a
                  href="tel:03097303127"
                  className="hover:text-teal-300 transition-colors"
                >
                  03097303127
                </a>
                <span className="text-teal-400/60">/</span>
                <a
                  href="tel:03376132219"
                  className="hover:text-teal-300 transition-colors"
                >
                  03376132219
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Soft Card Preview & Dual Download (Card + PDF) */}
        <div className="mb-8 rounded-2xl bg-white/[0.04] border border-white/10 p-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-teal-300 font-semibold">
                Digital Visiting Card
              </p>
              <p className="text-sm font-semibold text-white">
                Dr. Zohaib Buzdar Soft Card
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadCard}
                disabled={isDownloadingCard}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 disabled:opacity-60 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <FaDownload className="text-xs text-teal-300" />
                <span>{isDownloadingCard ? "Saving..." : "Download Card"}</span>
              </button>
              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={isDownloadingPdf}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-400 hover:bg-teal-300 disabled:opacity-60 text-slate-950 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <FaFilePdf className="text-xs" />
                <span>{isDownloadingPdf ? "Generating..." : "Download PDF"}</span>
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
            <img
              src={resolvedSrc}
              alt="Dr. Zohaib Buzdar Soft Card"
              loading="lazy"
              className="w-full max-h-56 object-contain mx-auto"
            />
          </div>

          {statusError && (
            <p className="mt-2 text-xs text-rose-300">{statusError}</p>
          )}
        </div>

        {/* ✅ Social Icons */}
        <div className="pt-2 border-t border-white/10">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-4">
            Connect With Us
          </p>
          <div className="flex justify-center flex-wrap gap-3.5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-teal-400/20 border border-white/10 hover:border-teal-400/45 text-teal-300 hover:text-teal-200 flex items-center justify-center text-xl shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}