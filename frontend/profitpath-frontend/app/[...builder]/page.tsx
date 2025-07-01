import { builder, BuilderComponent } from '@builder.io/react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function CatchAllPage(props: any) {
  return <BuilderComponent model="page" content={props.builderContent} />;
}

export async function getStaticProps({ params }: any) {
  const builderContent = await builder
    .get('page', {
      userAttributes: {
        urlPath: '/' + (params?.builder?.join('/') || ''),
      },
    })
    .toPromise();

  return {
    props: {
      builderContent: builderContent || null,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
