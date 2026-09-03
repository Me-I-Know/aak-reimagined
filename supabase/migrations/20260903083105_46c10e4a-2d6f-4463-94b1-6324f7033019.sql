CREATE TABLE public.arbitration_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  applicant_name TEXT NOT NULL,
  organisation TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  respondent TEXT NOT NULL,
  project TEXT NOT NULL,
  discipline TEXT NOT NULL,
  summary TEXT NOT NULL,
  email_sent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.arbitration_applications TO anon, authenticated;
GRANT ALL ON public.arbitration_applications TO service_role;

ALTER TABLE public.arbitration_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an arbitration application"
  ON public.arbitration_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);