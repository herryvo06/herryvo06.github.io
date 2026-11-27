/** KM marker + section title + optional Vietnamese accent (DESIGN.md 3.4). */
type Props = {
  km: string;
  name: string;
  vn?: string;
  title?: string;
  titleId: string;
  level?: 1 | 2;
};

export function SectionHeader({ km, name, vn, title, titleId, level = 2 }: Props) {
  const label = [km, name.toUpperCase()].join(" · ");
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className="mb-12">
      <p className="km-label">
        {label}
        {vn && (
          <>
            {" · "}
            <span lang="vi" className="normal-case">
              {vn}
            </span>
          </>
        )}
      </p>
      {title && (
        <Heading id={titleId} className="mt-4 text-[40px] text-foam">
          {title}
        </Heading>
      )}
    </header>
  );
}
