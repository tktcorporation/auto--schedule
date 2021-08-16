export class Logo {
  constructor(private readonly baseUrl: string) {}

  yokogumiUrl = (): string => this.baseUrl + "vercel.png";
  symbolUrl = (params: { isPath: boolean; ext: "png" | "svg" }): string =>
    `${params.isPath ? "/" : this.baseUrl}vercel.${params.ext}`;
}
