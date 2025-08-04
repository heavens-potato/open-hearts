import { Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export default function FlagSection({ imageSrc, title, description, type }) {
    const theme = useTheme();

    const titleColor = type === "red" ? "#A30B37" : "#139B62";

    return (
        <>
            <div className="h-1 my-8 mx-6 sm:mx-6 md:mx-10 lg:mx-12"></div>
            <section className="w-full flex flex-col md:flex-row items-center px-6 sm:px-6 md:px-10 lg:px-12 xl:px-30 py-3">
                <div className="flex-shrink-0 w-32 h-32">
                    <Image
                        src={imageSrc}
                        alt={`${type} flag icon`}
                        width={75}
                        height={75}
                    />
                </div>
                <div className="flex flex-col text-left flex-grow">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.h6.fontSize,
                                sm: theme.typography.h6.fontSize,
                                md: theme.typography.h5.fontSize,
                                lg: theme.typography.h4.fontSize,
                            },
                            color: titleColor,
                            fontWeight: "bold",
                            mb: 2,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: theme.typography.body1.fontSize,
                                sm: theme.typography.body1.fontSize,
                                md: theme.typography.h6.fontSize,
                            },
                            color: "black",
                        }}
                    >
                        {description}
                    </Typography>
                </div>
            </section>
        </>
    );
}