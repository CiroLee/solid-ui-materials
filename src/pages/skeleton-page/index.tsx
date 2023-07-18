import SourceLink from '@/business/SourceLink';
import SSkeleton from '@/components/SSkeleton';
import './skeleton.scss';
export default function SkeletonPage() {
  return (
    <>
      <div flex items-center justify-between>
        <h3>SSkeleton</h3>
        <div>
          <span hover:text-blue-600 text-gray cursor-pointer mr-4>
            code
          </span>
          <SourceLink path="SPopup" name="source" />
        </div>
      </div>
      <h4>type: shimmer</h4>
      <div class="card-skeleton">
        <SSkeleton type="shimmer" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="shimmer" class="card-skeleton__item" />
          <SSkeleton type="shimmer" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
      <h4>type: flicker</h4>
      <div class="card-skeleton">
        <SSkeleton type="flicker" class="card-skeleton__avatar" />
        <div class="card-skeleton__content">
          <SSkeleton type="flicker" class="card-skeleton__item" />
          <SSkeleton type="flicker" class="card-skeleton__item" style={{ width: '80%' }} />
        </div>
      </div>
    </>
  );
}
