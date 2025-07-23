"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import cryingIcon from "../components/images/crying.svg";
import depressionIcon from "../components/images/depression.svg";
import psychoIcon from "../components/images/psycho.svg";
import { motion } from "framer-motion";

export default function EmotionalToll() {
  const theme = useTheme();
  const [page, setPage] = useState(0);

  const goNext = () => page < 2 && setPage(page + 1);
  const goBack = () => page > 0 && setPage(page - 1);

  return (
    <div className="relative flex flex-col items-center justify-center text-center p-3 w-full mx-auto">
      <motion.div
        key={page}
        className="w-full flex flex-col justify-center"
        minHeight="100vh"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {page === 0 && (
          <div className="w-full">
            <Typography
              sx={{
                fontSize: {
                  xs: theme.typography.h6.fontSize,
                  sm: theme.typography.h6.fontSize,
                  md: theme.typography.h6.fontSize,
                  lg: theme.typography.h5.fontSize,
                  xl: theme.typography.h5.fontSize,
                },
                color: "black",
                textAlign: "left",
                width: "100%",
              }}
            >
              While the financial numbers are shocking, the damage extends far
              beyond money.
            </Typography>

            <div className="flex flex-col md:flex-row mt-4 w-full">
              <div className="w-full md:w-1/2 flex justify-center p-5">
                <Image
                  src={cryingIcon}
                  alt="Crying icon"
                  width={170}
                  height={170}
                  className="object-contain"
                />
              </div>

              <div className="w-full md:w-1/2">
                <Typography
                  sx={{
                    fontSize: {
                      xs: theme.typography.h6.fontSize,
                      sm: theme.typography.h6.fontSize,
                      md: theme.typography.h6.fontSize,
                      lg: theme.typography.h5.fontSize,
                      xl: theme.typography.h5.fontSize,
                    },
                    color: "black",
                    textAlign: "left",
                  }}
                >
                  Victims are left in a state of{" "}
                  <strong>
                    unique financial and emotional trauma “unlike any other”
                  </strong>
                  , having experienced the twofold blow of{" "}
                  <strong>losing both money</strong> and a{" "}
                  <strong>romantic relationship</strong> at the same time
                  (Whitty & Buchanan, 2012).
                </Typography>
              </div>
            </div>
          </div>
        )}

        {page === 1 && (
          <div>
            <Typography
              sx={{
                fontSize: {
                  xs: theme.typography.h6.fontSize,
                  sm: theme.typography.h6.fontSize,
                  md: theme.typography.h6.fontSize,
                  lg: theme.typography.h5.fontSize,
                  xl: theme.typography.h5.fontSize,
                },
                color: "black",
                textAlign: "left",
              }}
            >
              Romance fraud takes advantage of the victim’s{" "}
              <strong>belief of being in a genuine relationship</strong> to
              enable the offender to benefit. These offenders are known to use a
              variety of “<strong>persuasion tactics</strong>”, including{" "}
              <strong>manipulation, love bombing,</strong> and{" "}
              <strong>“psychological abuse techniques”</strong> often used in
              the context of <strong>domestic violence</strong> (Cross, 2023).
            </Typography>
            <div className="flex justify-center mt-8">
              <Image
                src={psychoIcon}
                alt="Psychological manipulation"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        )}

        {page === 2 && (
          <div className="flex flex-col md:flex-row items-center">
            <Typography
              sx={{
                fontSize: {
                  xs: theme.typography.h6.fontSize,
                  sm: theme.typography.h6.fontSize,
                  md: theme.typography.h6.fontSize,
                  lg: theme.typography.h5.fontSize,
                  xl: theme.typography.h5.fontSize,
                },
                color: "black",
                textAlign: "left",
                width: "100%",
              }}
            >
              Victims continue to suffer long after cases of fraud are over,
              experiencing severe <strong>embarrassment</strong> and{" "}
              <strong>shame</strong> at falling for such a scheme, as well as “
              <strong>anxiety, depression</strong>”, and even “
              <strong>suicidal ideation</strong>” (<u>Aborisade et al., 2024</u>
              ).
            </Typography>
            <div className="w-full md:w-1/2 sm:w-1/4 flex justify-center p-4">
              <Image
                src={depressionIcon}
                alt="Depression icon"
                width={200}
                height={200}
                className="object-contain w-32 sm:w-40 md:w-48 lg:w-56"
              />
            </div>
          </div>
        )}
      </motion.div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between w-full mt-4 mb-6">
        {/* Back Arrow */}
        {page > 0 ? (
          <button
            onClick={goBack}
            className="text-5xl hover:scale-110 transition-transform"
            style={{ color: "#FF934F" }}
          >
            &lt;
          </button>
        ) : (
          <div className="w-6" />
        )}

        {/* Hearts */}
        <div className="flex space-x-4 mt-2 mb-8">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="focus:outline-none"
            >
              <span
                className={`text-4xl transition-all duration-300 ${
                  i === page ? "opacity-100 scale-110" : "opacity-30 grayscale"
                }`}
                style={{
                  background: "linear-gradient(to right, #FF934F, #A30B37)",
                  backgroundSize: "300% 100%",
                  backgroundPosition: `${(page / 2) * 100}% 0%`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ❤️
              </span>
            </button>
          ))}
        </div>

        {/* Next Arrow */}
        {page < 2 ? (
          <button
            onClick={goNext}
            className="text-5xl hover:scale-110 transition-transform"
            style={{ color: "#FF934F" }}
          >
            &gt;
          </button>
        ) : (
          <div className="w-6" />
        )}
      </div>
    </div>
  );
}
