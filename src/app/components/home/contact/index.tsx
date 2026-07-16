"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";
type UmamiWindow = Window & {
  umami?: {
    track: (eventName: string, data?: Record<string, string>) => void;
  };
};
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContactData(data?.contactLinks);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const reset = () => {
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    try {
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error("La clé Web3Forms n'est pas configurée");
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name,
            telephone: formData.phone || "Non renseigné",
            email: formData.email,
            message: formData.message,
            subject: `Nouveau message du portfolio — ${formData.name}`,
            from_name: "Portfolio de Cyril Delly",
            botcheck: "",
          }),
        },
      );
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Échec de l'envoi");
      }

      reset();
      setSubmitStatus("success");
      (window as UmamiWindow).umami?.track("Envoi formulaire contact");
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      setSubmitStatus("error");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (submitStatus !== "idle" && submitStatus !== "submitting") {
      setSubmitStatus("idle");
    }
  };

  return (
    <section id="contact" className="no-print scroll-mt-24">
      <div className="container">
        <div className="pt-16 md:pt-32 pb-20">
          <div className="flex items-center justify-between gap-2 border-b border-foreground pb-7 mb-9 md:mb-16">
            <h2>Me contacter</h2>
            <p className="text-xl text-primary">( 04 )</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-7 sm:gap-12">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="name" className="label">
                      Prénom et nom *
                    </Label>
                    <Input
                      required
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="label">
                      Téléphone
                    </Label>
                    <Input
                      className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                      id="phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="label">
                    Email *
                  </Label>
                  <Input
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="label">
                    Message *
                  </Label>
                  <Textarea
                    required
                    className="w-full border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary! focus-visible:outline-none py-2!"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                  />
                </div>
                <div aria-live="polite">
                  {submitStatus === "success" && (
                    <div className="flex items-center gap-2">
                      <Image
                        src={"/images/icon/success-icon.svg"}
                        alt="Message envoyé"
                        width={30}
                        height={30}
                      />
                      <p className="text-muted-foreground">
                        Message envoyé avec succès ! Je vous répondrai rapidement.
                      </p>
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <p className="text-destructive">
                      L&apos;envoi a échoué. Réessayez ou écrivez-moi directement à{" "}
                      <Link
                        className="underline"
                        href="mailto:cyrildelly9@gmail.com"
                      >
                        cyrildelly9@gmail.com
                      </Link>
                      .
                    </p>
                  )}
                </div>
                <Button
                  variant="outline"
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="relative overflow-hidden cursor-pointer w-fit h-full py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                >
                  <span className="relative z-10 text-xl font-medium text-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {submitStatus === "submitting" ? "Envoi…" : "Envoyer"}
                  </span>
                </Button>
              </div>
            </form>
            <div className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end">
              <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                {contactData?.socialLinks?.map((value: any, index: any) => {
                  return (
                    <div key={index}>
                      <Link
                        href={value?.href}
                        target="_blank"
                        rel="noreferrer"
                        data-umami-event={
                          value?.title === "LinkedIn"
                            ? "Clic LinkedIn"
                            : "Clic GitHub"
                        }
                        className={`inline-flex rounded-full px-5 py-2.5 text-base sm:text-lg font-medium text-white transition-transform hover:-translate-y-0.5 ${
                          value?.title === "LinkedIn"
                            ? "bg-[#0A66C2] hover:bg-[#004182]"
                            : "bg-[#24292F] hover:bg-[#0D1117]"
                        }`}
                      >
                        {value?.title}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                {contactData?.contactInfo?.map((value: any, index: any) => {
                  return (
                    <div key={index}>
                      <Link
                        href={value?.link}
                        data-umami-event={
                          value?.type === "email" ? "Clic email" : undefined
                        }
                        className="text-base lg:text-lg text-foreground font-normal border-b border-foreground pb-3 hover:text-primary hover:border-primary"
                      >
                        {value?.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
