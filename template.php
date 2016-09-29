<?php if ($sourceable && $page->sourceUri()->exists()): ?>
<div class="text">
  <i class="icon fa fa-clone"></i>
  <span style="padding-left: .5rem">
    This is a clone of
    <a href="<?php echo $site->url() ?>/panel/pages/<?php echo $page->sourceUri() ?>/edit">
      <?php echo $page->sourceTitle() ?>
    </a>
  </span>
</div>
<?php endif ?>

<a href="#" class="sidebar-inject btn-clone" data-field="clone">
  <i class="icon fa fa-clone"></i>
  <span><?php e($text, $text, 'Clone this page') ?></span>
  <input
    type="hidden"
    class="input input-clone"
    id="<?php echo $field->id(); ?>"
    name="<?php echo $field->name(); ?>"
    value="<?php echo $newID; ?>"
  >
</a>
