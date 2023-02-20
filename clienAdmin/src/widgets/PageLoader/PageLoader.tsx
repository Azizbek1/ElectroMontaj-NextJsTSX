import PageLoaderStyled from "./Style";

export function PageLoader() {
  return (
    <PageLoaderStyled>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PageLoaderStyled>
  );
}
