const avatarModule = import.meta.glob("@images/avatar-*.webp", { eager: true });
const avatars = Object.values(avatarModule).map((module: any) => module.default);

export default function(name: string): string {
  const regexp = new RegExp(name);

  return avatars.find(avatar => regexp.test(avatar));
}