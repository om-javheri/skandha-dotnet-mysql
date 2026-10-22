FROM node:24-slim AS client
WORKDIR /client
COPY client/package.json ./
RUN npm install --no-audit --no-fund
COPY client ./
RUN npm run build

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src
COPY Site.csproj ./
RUN dotnet restore
COPY *.cs ./
RUN dotnet publish -c Release -o /out --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY --from=build /out ./
COPY server.json not-found.html ./
COPY --from=client /client/dist ./site
ENV PORT=8080 DATA_DIR=/data
VOLUME /data
EXPOSE 8080
CMD ["dotnet", "Site.dll"]
